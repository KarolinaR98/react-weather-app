const SearchWeather = (props) => {

    return (
        <div className="searchWeather">
            Szukaj: <input type="text" onChange={(e)=>{
                props.filterWeather(e.target.value)
            }}></input>
        </div>
    );
}

export default SearchWeather;