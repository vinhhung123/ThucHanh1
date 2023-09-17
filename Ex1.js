import react from "react"
import { View } from "react-native"
import { Text } from "react-native-paper"

const Ex1=()=>{
    return(
        <View style={{
            width:100,
            height:100,
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:"aqua"
        }}>
            <Text style={{color:"#fff"}}>
                hello world
            </Text>
        </View>
    )
}
export default Ex1;