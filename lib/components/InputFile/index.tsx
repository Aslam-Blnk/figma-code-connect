import React, { useCallback, useEffect, useState } from 'react'

import { cn } from '../../utils'

type InputFileContextType = {
  /**
   * Whether the user is currently dragging a file over the input container.
   */
  dragging: boolean
  handleDragOver: (e: React.DragEvent) => void
  handleDragLeave: (e: React.DragEvent) => void
  handleDrop: (e: React.DragEvent) => void
  handleFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleRemoveFile: (index: number) => void
  files: File[]
  /**
   * Whether the input should accept multiple files.
   */
  multiple?: boolean
}

const InputFileContext = React.createContext<InputFileContextType | null>(null)

function useInputFile() {
  const context = React.useContext(InputFileContext)
  if (!context) {
    throw new Error('useInputFile must be used within a InputFileProvider.')
  }

  return context
}

type InputFileProviderProps = {
  children: React.ReactNode
  /**
   * A function that is called whenever the list of files changes.
   */
  onFilesChange?: (files: File[]) => void
  /**
   * Whether the input should accept multiple files.
   */
  multiple?: boolean
  /**
   * A function that checks if a file is valid based on its size.
   */
  checkFileSize?: (file: File) => boolean
}

const InputFileProvider: React.FC<InputFileProviderProps> = ({
  children,
  onFilesChange,
  multiple,
  checkFileSize = () => true,
}) => {
  const [files, setFiles] = useState<File[]>([])
  const [dragging, setDragging] = useState(false)

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.stopPropagation()
    e.preventDefault()
    setDragging(true)
  }, [])

  useEffect(() => {
    if (onFilesChange) {
      onFilesChange(files)
    }
  }, [files, onFilesChange])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.stopPropagation()
    e.preventDefault()
    setDragging(false)
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.stopPropagation()
      e.preventDefault()
      setDragging(false)
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        if (multiple) {
          setFiles((prev) => {
            const newFiles = [...prev]
            for (let i = 0; i < e.dataTransfer.files.length; i++) {
              if (checkFileSize(e.dataTransfer.files[i])) {
                newFiles.push(e.dataTransfer.files[i])
              }
            }
            return newFiles
          })
        } else {
          if (checkFileSize(e.dataTransfer.files[0])) {
            setFiles([e.dataTransfer.files[0]])
          }
        }
      }
    },
    [multiple, checkFileSize]
  )
  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files
      if (files && files.length > 0) {
        if (multiple) {
          setFiles((prev) => {
            const newFiles = [...prev]
            for (let i = 0; i < files.length; i++) {
              if (checkFileSize(files[i])) {
                newFiles.push(files[i])
              }
            }
            return newFiles
          })
        } else {
          if (checkFileSize(files[0])) {
            setFiles([files[0]])
          }
        }
      }
    },
    [multiple, checkFileSize]
  )

  const handleRemoveFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <InputFileContext.Provider
      value={{
        dragging,
        handleDragOver,
        handleDragLeave,
        handleDrop,
        handleFileSelect,
        handleRemoveFile,
        files,
        multiple,
      }}
    >
      {children}
    </InputFileContext.Provider>
  )
}

const InputContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {}
>(({ className, ...props }, ref) => {
  const { dragging, handleDragOver, handleDragLeave, handleDrop } =
    useInputFile()
  return (
    <div
      ref={ref}
      className={cn('file-input-container', dragging ?? 'dragover', className)}
      {...props}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    />
  )
})
InputContainer.displayName = 'InputContainer'

interface InputFileBaseProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputWrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn('file-input-wrapper', className)} {...props} />
  )
})
InputWrapper.displayName = 'InputWrapper'

const InputFile = React.forwardRef<HTMLInputElement, InputFileBaseProps>(
  ({ className, ...props }, ref) => {
    const { handleFileSelect, multiple } = useInputFile()
    return (
      <input
        type={props.type ?? 'file'}
        ref={ref}
        onChange={(e) => {
          handleFileSelect(e)
          if (props.onChange) {
            props.onChange(e)
          }
        }}
        className={cn('input-file', className)}
        multiple={multiple}
        {...props}
      />
    )
  }
)
InputFile.displayName = 'InputFile'

const UploadedFileContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('uploaded-file-container', className)}
      {...props}
    />
  )
})
UploadedFileContainer.displayName = 'UploadedFileContainer'

const UploadedFile = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn('uploaded-file', className)} {...props} />
})
UploadedFile.displayName = 'UploadedFile'

export {
  InputContainer,
  InputWrapper,
  UploadedFile,
  UploadedFileContainer,
  InputFileProvider,
  InputFile,
  // eslint-disable-next-line react-refresh/only-export-components
  useInputFile,
}
