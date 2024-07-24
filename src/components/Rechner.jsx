import React from "react";

function Rechner() {
    const [display, setDisplay] = React.useState("");

    const eingabe = (wert) => {
        let wertDisplay = display;
        setDisplay(wertDisplay += wert);
    }

    const loeschen = () => {
        setDisplay("");
    }

    const ergebnis = () => {
        let wertDisplay = display;
        setDisplay(eval(wertDisplay));
    }

    return (
        <div>
            <div className="display"><h3>{display}</h3></div>
            <table className="rechner">
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td onClick={() => loeschen()}>C</td>
                    </tr>
                    <tr>
                        <td onClick={() => eingabe('7')}>7</td>
                        <td onClick={() => eingabe('8')}>8</td>
                        <td onClick={() => eingabe('9')}>9</td>
                        <td onClick={() => eingabe(' / ')}>/</td>
                    </tr>
                    <tr>
                        <td onClick={() => eingabe('4')}>4</td>
                        <td onClick={() => eingabe('5')}>5</td>
                        <td onClick={() => eingabe('6')}>6</td>
                        <td onClick={() => eingabe(' * ')}>x</td>
                    </tr>
                    <tr>
                        <td onClick={() => eingabe('1')}>1</td>
                        <td onClick={() => eingabe('2')}>2</td>
                        <td onClick={() => eingabe('3')}>3</td>
                        <td onClick={() => eingabe(' - ')}>-</td>
                    </tr>
                    <tr>
                        <td onClick={() => eingabe('0')}>0</td>
                        <td onClick={() => eingabe('.')}>,</td>
                        <td onClick={() => ergebnis()} id="erg">=</td>
                        <td onClick={() => eingabe(' + ')}>+</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Rechner;