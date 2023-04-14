import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
  } from '@chakra-ui/react'
  
    export const NameInput = ({isValid, value, onChange}) => {
      return(
          <FormControl isInvalid={!isValid}>
        <FormLabel></FormLabel>
        <Input className="name"
        name="name" 
        value={value} 
        onChange={onChange}
        placeholder="Apelido" 
        />
        
      </FormControl>
      )
    }