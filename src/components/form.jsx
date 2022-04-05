export default function Form() {
    const styles = {
        color: "blue"
    }

    return (
        <form>
            <div>
                <label style={styles} htmlFor="input1">Email:</label>
                <input type='text' id="input1"></input>
            </div>
            <div>
                <button>Enviar</button>
            </div>

        </form>
    );
}