import { useState, useEffect } from "react";
import MonacoEditor from './code-editor';
import Preview from './preview';
import  bundle  from '../bundler';
import Resizable from "./resizable";

const CodeCell = () => {
    const [input, setInput] = useState('');
    const [err, setErr] = useState('');
    const [code, setCode] = useState('');

    useEffect(() => {

        const timer = setTimeout(async () => {
            const output = await bundle(input);
            setCode(output.code);
            setErr(output.err);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [input]);

    return (
        <Resizable direction="vertical">
            <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
                <Resizable direction="horizontal">
                    <MonacoEditor 
                        initialValue='console.log("Enter in some Code!")'
                        onChange={(value) => setInput(value) }
                    />
                </Resizable>
                <Preview code={code} err={err} />
            </div>
        </Resizable>
        );
};

export default CodeCell;