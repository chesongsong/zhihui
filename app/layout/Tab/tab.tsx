'use client';
import { useState } from 'react'
import styles from './tab.module.css'
import classNames from 'classnames'

export interface ILabelValue {
    label: string
    value: string
}

export interface ITabProps {
    list: ILabelValue[]
    onChange: (v: ILabelValue) => void
    showBottom?: boolean
}
const Tab = (props: ITabProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const toggle = (index: number) => {
        setActiveIndex(index)
        props.onChange(props.list[index])
    }
    const listClassNames = classNames({
        [styles['filter-list']]: true,
        [styles['bottom']]: props.showBottom
    });

    const tabClassNames = (index: number) => classNames({
        [styles['filter-item']]: true,
        [styles.active]: activeIndex === index
    });
    return <div className={listClassNames}>
        {
            props.list.map((item, index) => <div key={item.value + index} onClick={() => toggle(index)} className={tabClassNames(index)}>{item.label}</div>)
        }
    </div>
}

export default Tab