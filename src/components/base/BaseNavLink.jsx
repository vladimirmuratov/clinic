import {NavLink} from "react-router-dom";

export const BaseNavLink = ({linksOptions, onClose = undefined, activeStyles = null}) => {
    const activeClasses = (isActive) => {
        return isActive ?
            activeStyles
                ? activeStyles
                : {textDecoration: 'underline'}
            : null
    }

    return (
        <>
            {linksOptions.length
                ? linksOptions.map(({id, label, path}) => (
                    <NavLink
                        key={id}
                        to={path}
                        onClick={onClose}
                        style={({isActive}) => activeClasses(isActive)}
                    >
                        {label}
                    </NavLink>
                ))
                : null
            }
        </>
    )
}
