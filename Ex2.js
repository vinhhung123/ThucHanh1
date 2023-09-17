import react from "react"
import { View,Button, TouchableOpacity } from "react-native"
import { Text } from "react-native-paper";

const Ex2 =()=> {
    return(
        <View>
            <Button title="Button 1" onPress={()=> alert("Hi")}/>
            <TouchableOpacity
                onPress={() =>alert("Hi World")}
                style={{
                    BackgroundColor:"red",
                    padding: 10,
                    alignItems:"center",
                    marginTop: 10,
                }}>
                    <Text style={{color: "blue",fontSize: 20}}>Button 2</Text>
            </TouchableOpacity>
        </View>
    );
};
export default Ex2;