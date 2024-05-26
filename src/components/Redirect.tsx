import { component$, useVisibleTask$ } from "@builder.io/qwik"
import { useNavigate } from "@builder.io/qwik-city"

interface ItemProps {
    route: string
}

export const Redirect = component$<ItemProps>((props) => {
    const navigate = useNavigate()

    if (props.route === '') {
        useVisibleTask$(()=>{
            navigate('/About me')
        })
    }

    useVisibleTask$(()=> {
        navigate('/'+props.route)
    })
    return null
})