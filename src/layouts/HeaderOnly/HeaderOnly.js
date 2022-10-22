import { Header } from '../layoutComponents';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="container">{children}</div>
        </div>
    );
}

export default HeaderOnly;
