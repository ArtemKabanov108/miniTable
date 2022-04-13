import * as React from 'react';
import {styled} from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import {useAppDispatch} from "../../../../hooks/redax";
import {fetchImages} from "../../../../store/redusers/asyncActionCreatorImage";

const Input = styled('input')({
    display: 'none',
});

export interface IWrapperProps {
    children: React.ReactNode
}

export default function UploadButtons() {

    const dispatch = useAppDispatch()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files
      const reader = new FileReader();
      if(files){
          reader.readAsDataURL(files[0])
          reader.onload = (event: ProgressEvent<FileReader>) => {
              console.log("image", event.target?.result)
              const formData = {file: event.target?.result}
              // @ts-ignore
              dispatch(fetchImages(formData))
              return formData
          }
      }
    }

    return (
        <Stack direction="row" alignItems="center" spacing={2}>
            <label htmlFor="icon-button-file">
                <Input
                    accept="image/*"
                    id="icon-button-file"
                    type="file"
                    onChange={ (e) => handleChange(e) }
                />
                <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera/>
                </IconButton>
            </label>
        </Stack>
    );
}