// Exercise1
// import React from 'react';
// import {View,Text} from "react-native";
// const Exercise1 = () =>{
//   return (
//       <View>
//         <Text style={{fontSize: 24}}>RP Values</Text>
//         <Text  style={{color: 'green'}}>Excellence</Text>
//         <Text  style={{backgroundColor: 'yellow'}}>Customer Centric</Text>
//           <Text  style={{fontStyle: "italic"}}>Integrity</Text>
//           <Text  style={{textAlign: 'centre'}}>Teamwork</Text>
//           <Text  style={{backgroundColor: 'black', color: 'white'}}>Enterprising</Text>
//       </View>
//   )
// }
//
// export default Exercise1;

// Exercise2
// import React from 'react';
// import {View,Text, StyleSheet} from "react-native";
// const Styles = StyleSheet.create({
//     greenbox:{
//         width:100,
//         height:100,
//         marginTop: 30,
//         backgroundColor:'green',
//         borderWidth: 1,
//         borderColor:'green',
//     },
//     boxText:{
//         textAlign:"center",
//         color:'white'
//     },
//     title:{
//         fontWeight:'bold',
//     }
// })
// const Exercise2 = () =>{
//     return (
//         <View>
//             <View style={Styles.greenbox}>
//                 <Text style={[Styles.boxText,Styles.title]}>Who We Are</Text>
//             </View>
//             <View style={Styles.greenbox}>
//                 <Text style={Styles.boxText}>Our People</Text>
//             </View>
//             <View style={Styles.greenbox}>
//                 <Text style={Styles.boxText}>Our Campus</Text>
//             </View>
//         </View>
//     )
// }
//
// export default Exercise2;

// Exercise3A
// import React from 'react';
// import {View,Text, StyleSheet} from "react-native";
//
// const styles = StyleSheet.create({
//     Parent:{
//         flexDirection:'row',
//         backgroundColor:'#F5fcff',
//         borderColor:'#0099AA',
//         borderWidth:5
//     },
//     Child:{
//         borderWidth:2,
//         textAlign:'center',
//         fontSize:24,
//     }
// })
// const Exercise3a = () =>{
//     return (
//         <View style={[styles.Parent, {marginTop:50}]}>
//             <Text style={[styles.Child, {backgroundColor:'powderblue'}]}>
//                 Child One
//             </Text>
//             <Text style={[styles.Child, {backgroundColor:'skyblue'}]}>
//                 Child Two
//             </Text>
//             <Text style={[styles.Child, {backgroundColor:'steelblue'}]}>
//                 Child Three
//             </Text>
//         </View>
//     )
// }
//
// export default Exercise3a;

// Exercise3B
// import React from 'react';
// import {View,Text, StyleSheet} from "react-native";
//
// const styles = StyleSheet.create({
//     Parent:{
//         flex: 1,
//         flexDirection:'column',
//         backgroundColor:'#F5fcff',
//         borderColor:'#0099AA',
//         borderWidth:5
//     },
//     Child:{
//         flex: 1,
//         borderWidth:2,
//         textAlign:'center',
//         fontSize:24,
//     }
// })
// const Exercise3b = () =>{
//     return (
//         <View style={[styles.Parent, {marginTop:50}]}>
//             <Text style={[styles.Child, {backgroundColor:'powderblue'}]}>
//                 Child One
//             </Text>
//             <Text style={[styles.Child, {backgroundColor:'skyblue'}]}>
//                 Child Two
//             </Text>
//             <Text style={[styles.Child, {backgroundColor:'steelblue'}]}>
//                 Child Three
//             </Text>
//         </View>
//     )
// }
//
// export default Exercise3b;

//  Exercise3C
// import React from 'react';
// import {View,Text, StyleSheet} from "react-native";
//
// const styles = StyleSheet.create({
//     Parent:{
//         flex: 1,
//         flexDirection:'column',
//         backgroundColor:'#F5fcff',
//         borderColor:'#0099AA',
//         borderWidth:5
//     },
//     Child:{
//         flex: 1,
//         borderWidth:2,
//         textAlign:'center',
//         fontSize:24,
//     }
// })
// const Exercise3c = () =>{
//     return (
//         <View style={[styles.Parent, {marginTop:50}]}>
//             <Text style={[styles.Child, {backgroundColor:'powderblue', maxWidth:90}]}>
//                 Child One
//             </Text>
//             <Text style={[styles.Child, {backgroundColor:'skyblue'}]}>
//                 Child Two
//             </Text>
//             <Text style={[styles.Child, {backgroundColor:'steelblue', maxHeight:120}]}>
//                 Child Three
//             </Text>
//         </View>
//     )
// }
//
// export default Exercise3c;

//  Exercise3D
// import React from 'react';
// import {View,Text, StyleSheet} from "react-native";
//
// const styles = StyleSheet.create({
//     Parent:{
//         flexDirection:'row',
//         backgroundColor:'#F5fcff',
//         borderColor:'#0099AA',
//         borderWidth:5
//     },
//     Child:{
//         borderWidth:2,
//         textAlign:'center',
//         fontSize:24,
//     }
// })
// const Exercise3d = () =>{
//     return (
//         <View style={[styles.Parent, {marginTop:50}]}>
//             <Text style={[styles.Child, {backgroundColor:'powderblue', flex:1}]}>
//                 Child One
//             </Text>
//             <Text style={[styles.Child, {backgroundColor:'skyblue', flex:2}]}>
//                 Child Two
//             </Text>
//             <Text style={[styles.Child, {backgroundColor:'steelblue', flex:3}]}>
//                 Child Three
//             </Text>
//         </View>
//     )
// }
//
// export default Exercise3d;

//  Exercise3E
// import React from 'react';
// import {View,Text, StyleSheet} from "react-native";
//
// const styles = StyleSheet.create({
//     Parent:{
//         flex: 1,
//         // justifyContent:'flex-start',
//         // justifyContent:'flex-end',
//         // justifyContent:'space-around',
//         justifyContent:'space-between',
//         flexDirection:'column',
//         backgroundColor:'#F5fcff',
//         borderColor:'#0099AA',
//         borderWidth:5
//     },
//     Child:{
//         borderWidth:2,
//         textAlign:'center',
//         fontSize:24,
//     }
// })
// const Exercise3e = () =>{
//     return (
//         <View style={[styles.Parent, {marginTop:50}]}>
//             <Text style={[styles.Child, {backgroundColor:'powderblue'}]}>
//                 Child One
//             </Text>
//             <Text style={[styles.Child, {backgroundColor:'skyblue'}]}>
//                 Child Two
//             </Text>
//             <Text style={[styles.Child, {backgroundColor:'steelblue'}]}>
//                 Child Three
//             </Text>
//         </View>
//     )
// }
//
// export default Exercise3e;

// Exercise4
// import React from 'react';
// import {View,Text, StyleSheet} from "react-native";
//
// const styles = StyleSheet.create({
//     Parent:{
//         flex: 1,
//         alignItems:'center',
//         justifyContent: 'space-around',
//         flexDirection:'row',
//         backgroundColor:'whitesmoke',
//         marginTop:30,
//     },
//     Child:{
//         textAlign:'center',
//         textAlignVertical:'center',
//         width:80,
//         height:80,
//     }
// })
// const Exercise4 = () =>{
//     return (
//         <View style={[styles.Parent, {marginTop:50}]}>
//             <Text style={[styles.Child, {backgroundColor:'skyblue'}]}>
//                 Square 1
//             </Text>
//             <Text style={[styles.Child, {backgroundColor:'lightgreen'}]}>
//                 Square 2
//             </Text>
//             <Text style={[styles.Child, {backgroundColor:'red'}]}>
//                 Square 3
//             </Text>
//         </View>
//     )
// }
//
// export default Exercise4;

// Exercise 5 Boat
// import React from 'react';
// import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome6';
//
// const styles = StyleSheet.create({
//     Top:{
//         justifyContent: "flex-start",
//         backgroundColor: 'steelblue',
//         alignItems: "center",
//     },
//     Title:{
//         fontSize:28,
//         fontWeight: 'bold'
//     },
//     Desc:{
//         fontSize:16,
//     }
// })
//
// const Boat = ({name, description,icon_name,picture})=> {
//     return (
//         <View style={styles.Top}>
//             <Text style={[styles.Title]}>
//                 <Icon name={icon_name} size={20} color="#B23B23"/> {name}
//             </Text>
//             <Image source={picture} style={{width:400, height:500}}/>
//             <Text style={[styles.Desc]}>
//                 {description}.
//             </Text>
//         </View>
//     );
// };
// const AllBoats= () => {
//     return  (
//         <ScrollView style={{marginTop:50}}>
//             <Boat name="Sea Ray 500 Sundancer" description='Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.' icon_name='sailboat' picture={require('./img/sea_ray.jpg')}/>
//             <Boat name="Four Winns Horizon 180" description='A sporty look and refined details truly set the Horizon 180 above all others.' icon_name='sailboat' picture={require('./img/four_winns.jpg')}/>
//             <Boat name="Flipper 640 ST" description='A modern take on the classic, traditional hardtop and perfect for a family picnic.' icon_name='sailboat' picture={require('./img/flipper.jpg')}/>
//             <Boat name="Princess V48" description='There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.' icon_name='sailboat' picture={require('./img/princess.jpg')}/>
//             <Boat name="Bayliner 175 Bowrider" description='Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.' icon_name='sailboat' picture={require('./img/bayliner.jpg')}/>
//             <Boat name="Fairline Targa 47" description='Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit.' icon_name='sailboat' picture={require('./img/fairline.jpg')}/>
//         </ScrollView>
//     )
// }
// export default AllBoats;

//Exercise5Quiz
import React,{useState} from 'react';
import {View, Text, Button, Alert,Image,ScrollView ,StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome6'

const styles = StyleSheet.create({
    Parent:{
        backgroundColor:'grey',
        justifyContent:'center',
        alignItems:'center',
        borderColor: 'black',
        borderWidth: 5,
        marginBottom: 30,
    },
    Pictures:{
        width:300,
        height:300
    },
})

const Question = ({question,picture,name1,name2,name3,onValueChange})=> {
    return (
        <View style={styles.Parent}>
            <Text style={{fontSize:18}}>
                {question}. What animal is this?
            </Text>
            <Image source={picture} style={styles.Pictures}/>
            <Text>
                Answer:
            </Text>
            <RNPickerSelect
                onValueChange={onValueChange}
                items={[
                    { label: name1, value: name1 },
                    { label: name2, value: name2 },
                    { label: name3, value: name3 },
                ]}
            />
        </View>
    );
};

const MyApp = () => {
    const[Ans1,setAns1] = useState('');
    const[Ans2,setAns2] = useState('');
    const[Ans3,setAns3] = useState('');
    const[Ans4,setAns4] = useState('');
    const [points, setPoints] = useState(0);
    return(
        <ScrollView>
            <View style={[styles.Parent, {marginTop:50}]}>
                <Icon name="cow" size={50} color="#B23B23"/>
                <Text style={{fontSize:28}}>Animal Quiz?</Text>
                <Question  question={1} picture={require('./Images/cow.jpg')} name1="Cow" name2="Buffalo" name3="Bull" onValueChange={(value) => setAns1(value)}/>
                <Question  question={2} picture={require('./Images/Chicken.jpg')} name1="Bird" name2="Emu" name3="Chicken" onValueChange={(value) => setAns2(value)}/>
                <Question  question={3} picture={require('./Images/Unicorn.jpg')} name1="Horse" name2="Unicorn" name3="Centuar" onValueChange={(value) => setAns3(value)}/>
                <Question  question={4} picture={require('./Images/Godzilla.jpg')} name1="Giant Lizard" name2="Godzilla" name3="Dragon" onValueChange={(value) => setAns4(value)}/>
                <Button
                    onPress={() => {
                        let newPoints = 0;
                        if (Ans1 === 'Cow') newPoints++;
                        if (Ans2 === 'Chicken') newPoints++;
                        if (Ans3 === 'Unicorn') newPoints++;
                        if (Ans4 === 'Godzilla') newPoints++;
                        setPoints(newPoints);
                        Alert.alert('Your Score', `You scored ${newPoints} out of 4.`);
                    }}
                    title="Submit"
                />
            </View>
        </ScrollView>
    )
}

export default MyApp;
