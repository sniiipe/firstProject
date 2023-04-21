import React,{useState,useRef} from 'react'
import {View,Text, ScrollView, Pressable} from 'react-native'
import styles from './MainScreenStyles'
export const MainScreen = () => {
    const [value,setValue]=useState('0')
    const[bracketopen,setBracketopen]=useState(false)
    const scrollViewRef= useRef()
    const handlePress=(val)=>{
        // console.log('pressed',val)
        if(val=='AC'){
            setValue('')
        }
        else if(val=='='){
            try {
                if (value.match(/\(/g) || [].length == value.match(/\)/g) || [].length){
                    if (value.slice(-1) == '+' || value.slice(-1) == '%' || value.slice(-1) == '/' || value.slice(-1) == '-' || value.slice(-1) == '*' || value == '.'){
                        setValue(`${eval(value.replace('()', '0').slice(0,-1))}`)

                    }
                    else {
                        setValue(`${eval(value.replace('()', '(0)') + '*1')}`)
                }

                }
                else{
                    setValue(eval(value));
                }
                
                // else{
                //     console.log('unequal brackets')
                // }
                
            }
             catch (e) {
                setValue('Format error')
                
            }

        }
        else if(value=='Format error'){
            setValue(val);
        }
        else if(val=='X'){
            setValue(value.slice(0,-1))

        }
        else if(val=='()'){
            if(value==''){
                setValue('(')
                setBracketopen(true)
            }
            else if (value.slice(-1) == '+' || value.slice(-1) == '%' || value.slice(-1) == '/' || value.slice(-1) == '-' || value.slice(-1) == '*' || value == '.'){
                setValue(value+'(')
                setBracketopen(true)

                }
                else{
                    if(bracketopen==true){
                        setValue(value+')')
                        setBracketopen(false)
                    }
                    else{
                        setValue(value+'(')
                        setBracketopen(true)
                    }
                }

        }
        else{
            if(value=='0'){
                if (isNaN(val)){
                    setValue(value+val)
                }
                else{
                setValue(val)
                }
            }
            else if (isNaN(val)){
                if (value.slice(-1) == '+' || value.slice(-1) == '%' || value.slice(-1) == '/' || value.slice(-1) == '-' || value.slice(-1) == '*'||value=='.'){
                setValue(value.slice(0,-1) + val)
                }
            else{
                setValue(value+val)
        }
    }
    else{
                setValue(value + val)
        
    }
    
        
    }
    }
  return (
      <View style={styles.main_screen}>
        <ScrollView  style={styles.main_screen_display} ref={scrollViewRef}onContentSizeChange={()=>scrollViewRef.current.scrollToEnd({animated:true})}>
              <Text style={styles.main_screen_display_text}>{value.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}</Text>

          </ScrollView>
              <View style={styles.main_screen_keypad}>
                {/* row 1 */}
                  <View style={styles.main_screen_keypad_row}>
                    <Pressable onPress={()=>handlePress('AC')}>
                        <View style={styles.btn1_outer}>
                            <Text style={styles.bg1_button}>AC</Text>

                        </View>
                    </Pressable>
                  <Pressable onPress={() => handlePress('()')}>
                      <View style={styles.btn2_outer}>
                          <Text style={styles.bg2_button}>( )</Text>

                      </View>
                  </Pressable>
                  <Pressable onPress={() => handlePress('%')}>
                      <View style={styles.btn2_outer}>
                          <Text style={styles.bg2_button}>%</Text>

                      </View>
                  </Pressable>
                  <Pressable onPress={() => handlePress('/')}>
                      <View style={styles.btn2_outer}>
                          <Text style={styles.bg2_button}>/</Text>

                      </View>
                  </Pressable>

                  </View>
                  {/* row 2 */}
              <View style={styles.main_screen_keypad_row}>
                  <Pressable onPress={() => handlePress('7')}>
                      <View style={styles.btn_outer}>
                          <Text style={styles.bg_button}>7</Text>

                      </View>
                  </Pressable>
                  <Pressable onPress={() => handlePress('8')}>
                      <View style={styles.btn_outer}>
                          <Text style={styles.bg_button}>8</Text>

                      </View>
                  </Pressable>
                  <Pressable onPress={() => handlePress('9')}>
                      <View style={styles.btn_outer}>
                          <Text style={styles.bg_button}>9</Text>

                      </View>
                  </Pressable>
                  <Pressable onPress={() => handlePress('*')}>
                      <View style={styles.btn2_outer}>
                          <Text style={styles.bg2_button}>*</Text>

                      </View>
                  </Pressable>

              </View>
              <View style={styles.main_screen_keypad_row}>
                  <Pressable onPress={()=>handlePress('4')}>
                      <View style={styles.btn_outer}>
                          <Text style={styles.bg_button}>4</Text>

                      </View>
                  </Pressable>
                  <Pressable onPress={()=>handlePress('5')}>
                      <View style={styles.btn_outer}>
                          <Text style={styles.bg_button}>5</Text>

                      </View>
                  </Pressable>
                  <Pressable onPress={()=>handlePress('6')}>
                      <View style={styles.btn_outer}>
                          <Text style={styles.bg_button}>6</Text>

                      </View>
                  </Pressable>
                  <Pressable onPress={()=>handlePress('-')}>
                      <View style={styles.btn2_outer}>
                          <Text style={styles.bg2_button}>-</Text>

                      </View>
                  </Pressable>

              </View>
              {/* row 3 */}
              <View style={styles.main_screen_keypad_row}>
                  <Pressable onPress={()=>handlePress('1')}>
                      <View style={styles.btn_outer}>
                          <Text style={styles.bg_button}>1</Text>

                      </View>
                  </Pressable>
                  <Pressable onPress={()=>handlePress('2')}>
                      <View style={styles.btn_outer}>
                          <Text style={styles.bg_button}>2</Text>

                      </View>
                  </Pressable>
                  <Pressable onPress={()=>handlePress('3')}>
                      <View style={styles.btn_outer}>
                          <Text style={styles.bg_button}>3</Text>

                      </View>
                  </Pressable>
                  <Pressable onPress={()=>handlePress('+')}>
                      <View style={styles.btn2_outer}>
                          <Text style={styles.bg2_button}>+</Text>

                      </View>
                  </Pressable>

              </View>
              {/* row 4 */}
              <View style={styles.main_screen_keypad_row}>
                  <Pressable onPress={()=>handlePress('0')}>
                      <View style={styles.btn_outer}>
                          <Text style={styles.bg_button}>0</Text>

                      </View>
                  </Pressable>
                  <Pressable onPress={()=>handlePress('.')}>
                      <View style={styles.btn_outer}>
                          <Text style={styles.bg_button}>.</Text>

                      </View>
                  </Pressable>
                  <Pressable onPress={()=>handlePress('X')}>
                      <View style={styles.btn1_outer}>
                          <Text style={styles.bg1_button}>X</Text>

                      </View>
                  </Pressable>
                  <Pressable onPress={()=>handlePress('=')}>
                      <View style={styles.btn2_outer}>
                          <Text style={styles.bg2_button}>=</Text>

                      </View>
                  </Pressable>

              </View>
              
              {/* XXXXXXXXXXXXXXXXXXXXX */}
              </View>

    </View>
  )
}
export default MainScreen