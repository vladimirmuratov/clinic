import {useNavigate} from "react-router-dom";
import {Button} from "@chakra-ui/react";
import {ArrowBackIcon} from "@chakra-ui/icons";

export const BaseBtnBack = () => {
    const navigate = useNavigate()

    const styles = {
        padding: 0,
    }

    const hoverStyles = {
        backgroundColor: "inherit"
    }

    return (
        <Button
            style={styles}
            _hover={hoverStyles}
            leftIcon={<ArrowBackIcon/>}
            onClick={() => navigate(-1)}
            variant="ghost"
            position="absolute"
        >
            Назад
        </Button>
    )
}
