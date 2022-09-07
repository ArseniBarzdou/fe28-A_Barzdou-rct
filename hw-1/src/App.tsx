import React, {useState} from 'react';
// @ts-ignore
import styles from './App.module.css';
import Button, {ButtonType} from "./Components/Button";
import Username from "./Components/Username";
import Title, {TitleType} from "./Components/Title";

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
            <div className="button-type">
            <Button type={ButtonType.Primary} title={'Primary'} onClick={() => alert('Primary')} />
            <Button type={ButtonType.Primary} title={'Primary'} onClick={() => alert('Primary')} disabled/>
            <Button type={ButtonType.Secondary} title={'Secondary'} onClick={() => alert('Secondary')} />
            <Button type={ButtonType.Secondary} title={'Secondary'} onClick={() => alert('Secondary')} disabled/>
            <Button type={ButtonType.Error} title={'Error'} onClick={() => alert('Error')} />
            <Button type={ButtonType.Error} title={'Error'} onClick={() => alert('Error')} disabled/>
            </div>
            <Username title={'AM'}  className={styles.userInfo}  />
            <Username title={'Artem Malkin'}  className={styles.nickname}  />
            {TABS_NAME.map((tab) => <div key={tab.key} className={styles.nickname}>{tab.title}</div>)}
            <Title type={TitleType.Signin} title={'Sign In'} onClick={() => alert('Вы не можете войти')}/>
        </div>
    );
}
export default App;
