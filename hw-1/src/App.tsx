import React, {useState} from 'react';
// @ts-ignore
import styles from './App.module.css';
import Button, {ButtonType} from "./Components/Button";
import Username from "./Components/Username";

const TABS_NAME = [
    {
        key: 'all',
        title: 'All',
        сlassName: 'all'
    },
    {
        key: 'myfavorite',
        title: 'My favorites',
    },
    {
        key: 'popular',
        title: 'Popular',
    },
]
export const App = () => {


    return (
        <div className={styles.app}>
            <Button type={ButtonType.Primary} title={'Primary'} onClick={() => alert('Primary')}/>
            <Button type={ButtonType.Gray} title={'Primary'} onClick={() => alert('Primary')}/>
            <Button type={ButtonType.Secondary} title={'Secondary'} onClick={() => alert('Secondary')} disabled={true} />
            <Button type={ButtonType.Gray} title={'Secondary'} onClick={() => alert('Secondary')} disabled={true} />
            <Button type={ButtonType.Error} title={'Error'} onClick={() => alert('Error')} />
            <Button type={ButtonType.Gray} title={'Error'} onClick={() => alert('Error')} />
            <Username title={'AM'}  className={styles.userInfo}  />
            <Username title={'Artem Malkin'}  className={styles.nickname}  />
            {TABS_NAME.map((tab) => <div key={tab.key} className={styles.nickname}>{tab.title}</div>)}
        </div>
    );
}
export default App;
