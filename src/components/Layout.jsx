import {Content} from "./Content";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {useState} from "react";
import {MobileMenu} from "./MobileMenu";
import {Container} from "./Container.jsx";
import {Box} from "@chakra-ui/react";

export const Layout = ({children}) => {
    const [isMobileMenuOpen, setMobileMenu] = useState(false)

    const handelOpen = () => setMobileMenu(true)

    const handelClose = () => setMobileMenu(false)

    return (
        <Box>
            <MobileMenu isOpen={isMobileMenuOpen} onClose={handelClose}/>
            <Container>
                <Header onOpen={handelOpen}/>
                <Content>
                    {children}
                </Content>
                <Footer/>
            </Container>
        </Box>
    )
}
