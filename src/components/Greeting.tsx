import { Text } from 'react-native'

export default function Greeting( { name, role }){
    return <Text>Hello {name}, have a good a day! {role}</Text>
}