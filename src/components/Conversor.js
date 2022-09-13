        const Conversor = () => {
        const [onzas, setOnzas] = useState(0);
        const [kilogramos, setkilogramos] = useState(0);
        const [gramos, setgramos] = useState(0);
      
        const [tipo, setTipo] = useState(1);
        const [total, setTotal] = useState(0);
      
        useEffect(() => {
          setOnzas((total * 16) / 1);
          setkilogramos((total * 0.453592) / 1);
          setgramos((total *  453.592) / 1);
        }, [total, tipo]);
      
      
        const handleTotalChange = e => {
          if (!isNaN(e.target.value)) {
            setTotal(e.target.value);
          }
        };
      
      
        return (
          <div className="App">
            <h1>Convertidor de unidades de peso</h1>
      
            <p>Onzas: {onzas}</p>
            <p>Kilogramos: {kilogramos}</p>
            <p>Gramos: {gramos}</p>
      
      
            <hr />
      
            <h3>{total}</h3>
      
            <select onChange={event => setTipo(event.target.value)} value={tipo}>
              <option value={1}>Libra</option>
            </select>
            <input onChange={handleTotalChange} value={total} />
          </div>
        );
      }
   
    
    
   
 
export default Conversor