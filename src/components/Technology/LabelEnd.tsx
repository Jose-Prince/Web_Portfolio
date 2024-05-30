import styles from './Technology.module.css'

interface ItemsProps {
    label : string
}

export const LabelEnd: React.FC<ItemsProps> = (props)=>{
    return (
        <div className={styles.titleDisplay}>
            {props.label}
        </div>
    )
}