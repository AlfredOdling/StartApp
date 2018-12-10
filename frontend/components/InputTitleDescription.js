import React from 'react'
import { View, TextInput } from 'react-native'
import { StyledText } from '../components/styled/StyledComponents'
import { styledComponents } from '../styles/_styledComponents'
import { getDim } from '../utils/responsive'

const InputTitleDescription = ({
  placeholder_title,
  ad_title,
  placeholder_description,
  ad_description,
  handleChange,
}) => {
  const { inputContainer, inputTitleDescription } = styledComponents
  const styles = {
    descriptionLength: 'medium_black_12',
  }

  return (
    <View style={inputTitleDescription}>
      <View style={inputContainer}>
        <TextInput
          autoCapitalize={'sentences'}
          placeholder={placeholder_title}
          onChangeText={text => handleChange('ad_title', text)}
          value={ad_title}
        />
      </View>
      <TextInput
        autoCapitalize={'sentences'}
        multiline
        style={{ marginTop: getDim(10), marginBottom: getDim(60) }}
        placeholder={placeholder_description}
        onChangeText={text => handleChange('ad_description', text)}
        value={ad_description}
      />
      <StyledText
        style={styles.descriptionLength}
        data={ad_description.length + '/' + 300}
      />
    </View>
  )
}

export default InputTitleDescription
