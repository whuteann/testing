import React from 'react';
import { StyleSheet} from 'react-native';
import { DripsyProvider, Text, View, styled, useBreakpoints} from '@dripsy/core';
import { theme } from '../../theme';
import { Desktop } from '../theme/Breakpoints';

const HomeScreen = ({navigation}) =>{
	return (
		<View>
			<Text
				sx= {{
					color: ['black', 'red', 'blue', 'green', 'other'], 
				}}>
					Home Screen
			</Text>
		</View>     
	)
}

const styles = StyleSheet.create({});

export default HomeScreen; 