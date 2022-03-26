export const theme = {
    color : {
        light  :  {
            'theme_1' : '#4B4B4B',
            'theme_2' : '#7F7F7F',
            'theme_3' : '#9C9DA4',
            'theme_4' : '#5E5E5E',
            'theme_5' : '#E7E7E7',
            'theme_6' : '#F6C45A',
            'theme_7' : '#F6C45A',
            'theme_8' : '#F6C45A',
            'theme_9' : '#F6C45A',
            'theme_10' : '#F6C45A',
            'theme_11' : '#F9F9F9',
        },
        dark : {
            'theme_1' : '#F2F2F2',
            'theme_2' : '#F8F8F8',
            'theme_3' : '#A6A6A6',
            'theme_4' : '#EBEBEB',
            'theme_5' : '#15202B',
            'theme_6' : '#F6C45A',
            'theme_7' : '#F6C45A',
            'theme_8' : '#F6C45A',
            'theme_9' : '#F6C45A',
            'theme_10' : '#F6C45A',
            'theme_11' : '#1E2732',
        },
        spring :  {
            'theme_1' : '#29453C',
            'theme_2' : '#77877E',
            'theme_3' : '#AAC97D',
            'theme_4' : '#66894A',
            'theme_5' : '#ECEAE2',
            'theme_6' : '#66894A',
            'theme_7' : '#AAC97D  ',
            'theme_8' : '#F1D151',
            'theme_9' : '#F1E4AE',
            'theme_10' : '#DFD9C0',
            'theme_11' : '#FAF8F0',
        },
        summer :  {
            'theme_1' : '#F27959',
            'theme_2' : '#EF997B',
            'theme_3' : '#1F7181',
            'theme_4' : '#2A606A',
            'theme_5' : '#E8E2CB',
            'theme_6' : '#FFCA58',
            'theme_7' : '#F4E4A4',
            'theme_8' : '#1F7181',
            'theme_9' : '#7CB689',
            'theme_10' : '#B0CCB6',
            'theme_11' : '#FAF8F0',
        },
        autumn : {
            'theme_1' : '#7C3A2F',
            'theme_2' : '#B08982',
            'theme_3' : '#F4BE3E',
            'theme_4' : '#84641A',
            'theme_5' : '#DCC8AD',
            'theme_6' : '#E77F2C',
            'theme_7' : '#F4BE3E',
            'theme_8' : '#A48E70',
            'theme_9' : '#DBC7AC',
            'theme_10' : '#E9DFD1',
            'theme_11' : '#FAF8F0  ',
        }, 
        winter : {
            'theme_1' : '#B56865',
            'theme_2' : '#D9B3B1',
            'theme_3' : '#BA8785',
            'theme_4' : '#A38382',
            'theme_5' : '#E8E0E0',
            'theme_6' : '#BA8785',
            'theme_7' : '#D6BEB4',
            'theme_8' : '#888482',
            'theme_9' : '#ACA7A4',
            'theme_10' : '#D1CCC9',
            'theme_11' : '#F9F9F9',
        }
    }
}

export const getThemeColor = (theme ='light') =>{
    const themeColor = theme[theme]
    const defaultColor = theme['light']

    return themeColor || defaultColor
}

export default theme;