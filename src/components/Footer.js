import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer(props) {
  return (
    <footer  className={`bg-${ props.mode === 'dark'? '#13466e': 'white'}, text-center text-${props.mode==='light'?'dark':'light'} mt-5 p-1`}>
        Copyright &copy; 2023 TextUtils | Developed By <a className={`pointer text-decoration-none text-${props.mode==='light'?'dark':'light'}`} href="https://shivaniyadav.online/" target="_blank" rel="noreferrer">Shivani Yadav</a> | <Link className={`text-decoration-none text-${props.mode==='light'?'dark':'light'}`} to="/privacy">Privacy Policy</Link> | <Link className={`text-decoration-none text-${props.mode==='light'?'dark':'light'}`} to="/terms">Terms of Use</Link>
    </footer>
  )
}