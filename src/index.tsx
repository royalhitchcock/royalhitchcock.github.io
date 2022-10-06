import 'bulmaswatch/superhero/bulmaswatch.min.css';
import { createRoot } from 'react-dom/client';
// import CodeCell from './components/code-cell';
import TextEditor from './components/text-editor';

const App = () => {
    return (
        <div>
            <TextEditor />
        </div>
    );
};

var container: Element | null = document.getElementById('root');
if(container) {
    var root = createRoot(container);
    root.render(<App />);
}  
