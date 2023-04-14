import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
  } from '@chakra-ui/react'

  export const PasswordlInput = ({isValid, value, onChange}) => {
    return(
<FormControl isInvalid={!isValid}>
      <FormLabel></FormLabel>
      <Input className="password"
      name="password" 
      //type='password' 
      value={value}
      type='password' 
      onChange={onChange}
      placeholder="Senha" 
      />
    
    </FormControl>
 )
}