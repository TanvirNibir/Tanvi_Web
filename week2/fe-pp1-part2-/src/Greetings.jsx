function Greetings({ lang, string }) {
    let greeting = '';
    switch (lang) {
        case 'de':
            gretting = 'Hello, world'
            break;
        case 'en':
            greeting = 'hello'
            break;
        case 'es':
            greeting = 'hola'
            break;
        case 'fr':
            greeting = 'bonjour'
            break;
        case 'fi':
            grreting = "moi"
            break;
        default:
            greeting = 'hello'
    }   
    return (
        <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
            {greeting} {children}</div>
    )
}
export default Greetings
