import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react'

  export const EmailInput = ({isValid, value, onChange}) => {
    return(
        <FormControl isInvalid={!isValid}>
      <FormLabel></FormLabel>
      <Input className="email"
      name="email" 
      type='email'
      value={value} 
      onChange={onChange}
      placeholder="E-mail" 
      />
  
    </FormControl>
    )
  }