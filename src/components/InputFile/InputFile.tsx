import { useCallback, useRef } from 'react'
import { toast } from 'sonner'

import {
  InputContainer,
  InputFile,
  InputFileProvider,
  InputWrapper,
  UploadedFile,
  UploadedFileContainer,
  useInputFile,
} from '@/components/InputFile'
import { LinkButton } from '@/components/LinkButton'
import { ResourceIcon } from '@/components/ResourceIcon'
import { ResourceTag } from '@/components/ResourceTag'
import { Toaster } from '@/components/Toaster'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/Tooltip'

type InputFileComponentProps = {
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  multiple?: boolean
  maxFileSize?: number
}

function InputFileComponent(
  { inputProps, multiple, maxFileSize }: InputFileComponentProps = {
    inputProps: undefined,
    multiple: false,
    maxFileSize: undefined,
  }
) {
  const inputRef = useRef<HTMLInputElement>(null)

  const checkFileSize = useCallback(
    (file: File) => {
      if (maxFileSize && file.size > maxFileSize) {
        toast.error('File size is too large', {
          description: `The file size must be less than ${maxFileSize / 1048576} MB`,
        })
        return false
      }
      return true
    },
    [maxFileSize]
  )

  return (
    <TooltipProvider>
      <Toaster />
      <InputFileProvider
        onFilesChange={(files) => {
          if (inputRef.current) {
            const dataTransfer = new DataTransfer()
            files.forEach((file) => {
              dataTransfer.items.add(file)
            })
            inputRef.current.files = dataTransfer.files
          }
        }}
        multiple={multiple}
        checkFileSize={checkFileSize}
      >
        <div className="flex w-full min-w-96 flex-col items-start gap-3">
          <InputContainer>
            <span className="mui-icon material-symbols-rounded filled">
              cloud_upload
            </span>
            <InputWrapper>
              <LinkButton variant="brand">
                Choose file
                <InputFile
                  id="id_file_input"
                  ref={inputRef}
                  tabIndex={-1}
                  multiple={multiple}
                  {...inputProps}
                />
              </LinkButton>
              <p className="text-subtler text-content-caption">
                or drop it here
              </p>
            </InputWrapper>
          </InputContainer>
          <FileList />
        </div>
      </InputFileProvider>
    </TooltipProvider>
  )
}

function FileList() {
  const { files, handleRemoveFile } = useInputFile()
  if (files.length === 0) {
    return null
  }
  return (
    <UploadedFileContainer>
      {files.map((file, index) => (
        <UploadedFile key={index}>
          <ResourceTag
            isLink={true}
            href={URL.createObjectURL(file)}
            download={file.name}
            target="_blank"
          >
            <ResourceIcon resourceIconColor="neutral" size="default">
              <span className="mui-icon material-symbols-rounded">image</span>
            </ResourceIcon>
            {file.name}
          </ResourceTag>
          <Tooltip>
            <TooltipTrigger asChild>
              <LinkButton
                variant="neutral"
                onClick={() => handleRemoveFile(index)}
              >
                <span className="mui-icon material-symbols-rounded">
                  do_not_disturb_on
                </span>
              </LinkButton>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-white-a80 text-content-caption-strong">
                Remove file
              </p>
            </TooltipContent>
          </Tooltip>
        </UploadedFile>
      ))}
    </UploadedFileContainer>
  )
}
export { InputFileComponent }
