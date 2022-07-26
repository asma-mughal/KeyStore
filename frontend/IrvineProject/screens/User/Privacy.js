import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import {COLORS, SIZES, icons} from '../../constants';
import { Header } from '../../components/header';
import {IconButton } from '../../components/iconButton';
export const Privacy= ({navigation, screenName}) =>{
   
  function renderHeader() {
    return(
      <Header
      title="Terms & Conditions"
    titleStyle={{
        fontWeight:'bold',
        fontSize:15,
        color:COLORS.blue,
    }}
    containerStyle={{
        height:70,
        marginHorizontal:SIZES.padding,
        right:20,
    backgroundColor:COLORS.white,
       paddingTop:20,
    }}
  leftComponent={
      <IconButton 
      icon={icons.back}
      containerStyle={{
          width:50,
          height:50,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:COLORS.white,
      }}
    iconStyle={{
        tintColor:'black'
    }}
    onPress={()=>navigation.goBack()}
      />
  }
    />)
}
 function renderPoints(){
    return(<View style={{
        padding:10,
    }}>
     <Text style={{
        fontSize:16,
        fontWeight:'bold',
        color:COLORS.blue,
     }}>Signed Chelsea FC Top Key Store- Consumer Social Prize Draw – Terms and Conditions</Text>
      <Text style={{
        color:COLORS.gray,
        fontSize:16,
        paddingTop:5,
      }}>1. The prize is for 1 winner to win 1 signed 19/20Chelsea FC shirt.</Text>
       <Text style={{
        color:COLORS.gray,
        fontSize:16,
        paddingTop:5,
      }}>2. The competition is open from midday Monday 21st December and closes at midday 23rd December (the “Closing Date”). Entries received after the Closing Date will automatically be disqualified.</Text>
       <Text style={{
        color:COLORS.gray,
        fontSize:16,
        paddingTop:5,
      }}>3. Fans can enter by tagging their friend.</Text>
       <Text style={{
        color:COLORS.gray,
        fontSize:16,
        paddingTop:5,
      }}>4. The winner will be chosen from facebook. The draw will take place on 24th December.</Text>
       <Text style={{
        color:COLORS.gray,
        fontSize:16,
        paddingTop:5, 
      }}>5. Contest Promoter (the “Promoter”) is INTERCARABAO LTD, AQUIS HOUSE, 49-51 BLAGRAVE STREET, READING BERKSHIRE, RG1 1PL. Chelsea Football Club has not sponsored this Contest in any way.</Text>
       <Text style={{
        color:COLORS.gray,
        fontSize:16,
        paddingTop:5,
      }}>6. The Promoter will inform the winner within 7 working days after the Closing Date.</Text>
       <Text style={{
        color:COLORS.gray,
        fontSize:16,
        paddingTop:5,
      }}>7. The winner must confirm their acceptance of the prize by acknowledging to the direct message within 5 days of being contacted.</Text>
       <Text style={{
        color:COLORS.gray,
        fontSize:16,
        paddingTop:5,
      }}>8. The Promoter will aim to dispatch the Signed Chelsea FC Shirt within a month of the Closing Date to a nominated store for collection. The winner will be notified of any unexpected delay.</Text>
       <Text style={{
        color:COLORS.gray,
        fontSize:16,
        paddingTop:5,
      }}>9. The winner will be picked at random and will be supervised by an independent person.</Text>
       <Text style={{
        color:COLORS.gray,
        fontSize:16,
        paddingTop:5,
      }}>10. The competition is open to adults living in the UK above the age of 18 only, except employees of the Promoter, their families or anyone directly connected with the prize. Entries from other countries and from those under 18 will not be accepted and will automatically be disqualified.</Text>
       <Text style={{
        color:COLORS.gray,
        fontSize:16,
        paddingTop:5,
      }}>11. The prize is non transferrable and cannot be exchanged for cash. Under no circumstances can this prize be transferred to a third party or sold for any financial amount.</Text>
       <Text style={{
        color:COLORS.gray,
        fontSize:16,
        paddingTop:5,
      }}>12. Only one entry per person is permitted. Multiple entries from the same person will render all entries void.</Text>
       <Text style={{
        color:COLORS.gray,
        fontSize:16,
        paddingTop:5,
      }}>13. The Promoter reserves the right to substitute the prize with another prize at its discretion.</Text>

<Text style={{
        color:COLORS.gray,
        fontSize:16,
        paddingTop:5,
      }}>14.Entrants will be deemed to have accepted these T&Cs and agreed to be bound by them when entering this Promotion. All other terms and conditions apply.</Text>
       <Text style={{
        color:COLORS.gray,
        fontSize:16,
        paddingTop:5,
      }}>15.The Promoter will not be liable for incorrect or incomplete contact information and if a winner cannot be contacted within 5 days of the prize draw or is not able or available to accept the prize for any reason which is beyond the Promoter’s reasonable control, then the Promoter reserves the right to award the prize to another entrant.</Text>

<Text style={{
        color:COLORS.gray,
        fontSize:16,
        paddingTop:5,
      }}>16.Except in the case of death or personal injury arising from its negligence or in respect of fraud and so far as is permitted by law, the Promoter and its associated companies and agents exclude responsibility and all liabilities arising from any postponement, cancellation, delay or changes to the prize details beyond the Promoter’s control and for any act or default of any third party supplier.</Text>
       <Text style={{
        color:COLORS.gray,
        fontSize:16,
        paddingTop:5,
      }}>17. The Promoter accepts no responsibility for entries lost, damaged, delayed or unreadable. No correspondence will be entered into.</Text>
       <Text style={{
        color:COLORS.gray,
        fontSize:16,
        paddingTop:5,
      }}>18. The name and county of the prize winners will be available by sending a SAE to: INTERCARABAO LTD, AQUIS HOUSE, 49-51 BLAGRAVE STREET, READING BERKSHIRE, RG1 1PL.</Text>
       <Text style={{
        color:COLORS.gray,
        fontSize:16,
        paddingTop:5,
      }}>19. Winners agree to have their name and county of residence published and may be required to participate in post event publicity.</Text>
       <Text style={{
        color:COLORS.gray,
        fontSize:16,
        paddingTop:5,
      }}>20.The prize draw shall be governed by English law and entrants to the prize draw submit to the exclusive jurisdiction of the courts of England and Wales.</Text>

    </View>)
 }
return(<View style={styles.mainContainer}>
   {renderHeader()}
    <ScrollView>
  
    <View style={{
        flex:1, 
        backgroundColor:COLORS.white,
      
    }}>
    
     {renderPoints()}
     <TouchableOpacity onPress={()=>navigation.navigate('NewsLetter')}>
  <Text style={{
    fontSize:15,
    fontWeight:'bold',
    color:COLORS.blue,
    paddingLeft:10,
    paddingBottom:5,
  }}>Get Our NewsLetter!</Text>
  </TouchableOpacity>
    </View>
    </ScrollView>
</View>
)
}
const styles = StyleSheet.create({
    mainContainer:{
    flex:1, 
    backgroundColor:COLORS.white,
    },
    TextHeading:{
 fontWeight:'bold',
        fontSize:19,
        alignSelf:'center',
      },
});