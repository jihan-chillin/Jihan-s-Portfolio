import {
    ContactWrapper,
    ContactMethodWrapper,
    ContactMethod,
    Rights
} from './contact.styles' 

export function Contact(){
    return(
        <ContactWrapper id='contact'>
            <ContactMethodWrapper>
                <a href='https://github.com/jihan-chillin'><ContactMethod src="./github.png"/></a>
                <a href='https://blog.naver.com/kimjihan77'><ContactMethod src="./mail.png"/></a>
                <a href='https://blog.naver.com/kimjihan77'><ContactMethod src="./blog.png"/></a>
            </ContactMethodWrapper>
            <Rights>© 2022, Kim Ji Han. All rights reserved</Rights>
        </ContactWrapper>
    )
}