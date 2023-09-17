import React,{useState} from "react";
import { Text,Button,View } from "react-native";
const Ex4 =()=>{
    const [pressCount, setPressCount] = useState(0);
    return (
        <View style={{ alignItems:"center",marginTop:20}}
        >
        <Text> Ban Da An Vao Nut Bam:{pressCount}time(s)
        </Text>
        <Button
        title={'Pressed ${pressCount} time(s)'}
        onPress={()=> setPressCount(pressCount +1)}
        />
        </View>
    );
};
export default Ex4;
