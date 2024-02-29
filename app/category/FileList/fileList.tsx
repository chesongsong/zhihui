'use client'
import Tab, { ILabelValue } from '@/app/layout/Tab/tab'
import styles from './fileList.module.css'
import File from '@/app/layout/File/file';
const FileList = () => {
    const list: ILabelValue[] = [{ label: '全部', value: '0' }, { label: '公文大全', value: '0' }, { label: '写作提升', value: '0' }, { label: '公考遴选', value: '0' }, { label: '合同协议', value: '0' }, { label: '集团企业公司', value: '0' }, { label: '理论文章', value: '0' }, { label: 'PPT课件模版', value: '0' }, { label: 'Excel表格模版', value: '0' },];
    const list2: ILabelValue[] = [{ label: '全部', value: '0' }, { label: '公文大全', value: '0' }, { label: '写作提升', value: '0' }, { label: '公考遴选', value: '0' }, { label: '合同协议', value: '0' }, { label: '集团企业公司', value: '0' }, { label: '理论文章', value: '0' }, { label: 'PPT课件模版', value: '0' }, { label: 'Excel表格模版', value: '0' }, { label: '公文大全', value: '0' }, { label: '写作提升', value: '0' }, { label: '公考遴选', value: '0' }, { label: '合同协议', value: '0' }, { label: '集团企业公司', value: '0' }, { label: '理论文章', value: '0' }, { label: 'PPT课件模版', value: '0' }, { label: 'Excel表格模版', value: '0' },];

    const onTabChange = (item: ILabelValue) => {
        console.log(item.label)
    }
    return <div className={styles['container']}>
        <div className={styles['filter-container']}>
            <div className={styles['inner-fileter-container']}>
                <Tab list={list} showBottom={true} onChange={onTabChange}></Tab>
                <Tab list={list2} showBottom={false} onChange={onTabChange}></Tab>
            </div>
        </div>
        <div className={styles['file-list']}>
            <div className={styles['file-sort']}>
                <div className={styles['file-sort-item']}>默认</div>
                <div className={styles['file-sort-item']}>最热</div>
                <div className={styles['file-sort-item']}>最新</div>
                <div className={styles['file-sort-item']}>价格</div>
            </div>
            <div className={styles['file-main-list']}>
                <File></File>
                <File></File>
                <File></File>
                <File></File>
                <File></File>
                <File></File>
                <File></File>
                <File></File>
                <File></File>
                <File></File>
                <File></File>
                <File></File>
                <File></File>
                <File></File>
                <File></File>
                <File></File>
                <File></File>
                <File></File>
                <File></File>
                <File></File>
                <File></File>
                <File></File>
            </div>
        </div>
    </div>
}
export default FileList