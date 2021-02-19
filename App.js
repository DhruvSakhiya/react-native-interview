/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';



const WINDOW_HEIGHT = Dimensions.get('window').height;

const MOCKUP_DEVICE_HEIGHT = 800;

const H = pixcel => {return((pixcel * WINDOW_HEIGHT)/ MOCKUP_DEVICE_HEIGHT)}


const App = () => {

const [profitInput, setProfitInput] = useState();
const [investMent, setInvestMent] = useState([]);
const [sumOfInvestment, setSumOfInvestment] = useState(0);
const [bookedProfit, setbookedProfit] = useState(0);



  const onCalculatePress = () =>{

    let tempInput = profitInput
    let tempSumOfInvestment = 0;
    let tempBookedProfit = 0;
    let tempInvestment = [];
    let tempShare = [];

   //add profit in array of the object
    shareData.map((temp,index)=>{
      let profit = temp.sell-temp.buy
      if(profit>0)
      {
        tempShare.push({...temp,profit:profit})
      }
    })

    //to sort the array according to profit
    let sortedArray = tempShare.sort((a,b)=>b.profit-a.profit)

    //to deduct the investment
    sortedArray.forEach((dataTemp,index)=>{
      if(dataTemp.buy<=tempInput)
      {
        tempInvestment.push(dataTemp);
        tempInput = tempInput - dataTemp.buy;
      }
    })
 
    //to store total investment and profit
    tempInvestment.map((tempRender,index)=>{
      tempSumOfInvestment += tempRender.buy;
      tempBookedProfit += tempRender.profit
    })

    setInvestMent(tempInvestment)
    setSumOfInvestment(tempSumOfInvestment);
    setbookedProfit(tempBookedProfit);

  }


  const shareData = [
    {share:'L&T',buy:100.00,sell:112.00},
    {share:'NHPC',buy:25.60,sell:28.80},
    {share:'SBICard',buy:80.00,sell:85.40},
    {share:'Appollo',buy:250.00,sell:195.00},
    {share:'Edelweiss',buy:290.24,sell:62.80},
    {share:'ITC',buy:153.95,sell:244.94},
    {share:'TCS',buy:456.00,sell:561.00},
    {share:'CEAT',buy:200.00,sell:205.44},
    {share:'HDFCBank',buy:806.00,sell:1008.50},
    {share:'PowerGrid',buy:190.00,sell:565.45},
    {share:'AXISBank',buy:30.50,sell:80.54},
    {share:'BajajFinsv',buy:31.60,sell:81.65},
    {share:'CIPLA',buy:140.00,sell:157.45},
    {share:'EKC',buy:80.50,sell:88.50},
    {share:'EMCO',buy:25.60,sell:0.45}
  ]

  return (
    <View style={styles.container}>
  <View style={styles.centerAlignment}>
  <Text style={{fontSize:20,color:'blue'}}>Maximum Profit</Text>
  </View>
  <View style={{flexDirection:'row',justifyContent:'center',marginTop:H(20),width:'100%',alignItems:'center'}}>
  <View style={{width:'20%'}}>
    <Text>Amount :</Text>
  </View>
  <View style={{width:'75%'}}>
    <TextInput onChangeText={(text)=>setProfitInput(text)} value={profitInput} style={{width:'100%',borderRadius:8,borderWidth:1}} />
  </View>
  </View>
  <View style={{marginTop:H(20),height:H(40),width:'100%',alignItems:'center',justifyContent:'center'}}>
    <TouchableOpacity onPress={()=>onCalculatePress()} style={{width:'50%',height:'100%',justifyContent:'center',alignItems:'center',backgroundColor:'grey'}}>
      <Text style={{color:'white'}}>Calculate</Text>
    </TouchableOpacity>
  </View>
  <ScrollView style={{width:'100%',marginTop:H(50)}}>
    <Text style={{marginLeft:10}}>Invested Share:</Text>
<View style={{flexDirection:'row',marginTop:H(50),justifyContent:'space-around'}}>
<View style={styles.tableRow}>
    <Text>Share</Text>
</View>
<View style={styles.tableRow}>
    <Text>Buy</Text>
</View>
<View style={styles.tableRow}>
    <Text>Sell</Text>
</View>
<View style={styles.tableRow}>
    <Text>Profit</Text>
</View>
    </View>
    {investMent.length!=0 ? investMent.map((subData,index)=>(
      <View key={index} style={{marginTop:H(20),flexDirection:'row'}}>
      <View style={{marginTop:20,borderBottomWidth:1,flexDirection:'row',justifyContent:'space-around',width:'100%',paddingBottom:20}}>
      <View style={{width:'25%',justifyContent:'center',alignItems:'center'}}>
    <Text>{subData.share}</Text>
</View>
<View style={styles.tableRow}>
    <Text>{subData.buy}</Text>
</View>
<View style={styles.tableRow}>
    <Text>{subData.sell}</Text>
</View>
<View style={styles.tableRow}>
    <Text>{subData.profit.toFixed(2)}</Text>
</View>
      </View>
      </View>
    )):<View style={{marginTop:H(10),width:'100%',alignItems:'center',justifyContent:'center'}}>
    <Text>No Data Found</Text>
    </View>}
    <View style={{marginTop:50,marginLeft:20,flexDirection:'row'}}>
      <Text>
        Total Invested :
      </Text>
      <View style={{marginLeft:20}}>
      <Text>
        {sumOfInvestment}
      </Text>
      </View>
    </View>
    <View style={{marginTop:10,marginLeft:20,flexDirection:'row',marginBottom:10}}>
      <Text>
        Total Profit :
      </Text>
      <View style={{marginLeft:20}}>
      <Text>
        {bookedProfit.toFixed(2)}
      </Text>
      </View>
    </View>
  </ScrollView>
  </View>
  );
};

const styles = StyleSheet.create({
container:{
  height:'100%',
  width:'100%'
},
centerAlignment:{
  alignItems:'center',
  marginTop:H(20)
},
tableRow:{
  width:'25%',
  justifyContent:'center',
  alignItems:'center'
}
})


export default App;
