interface DateTime {
    clouds: {all: number},
    dt: number,
    dt_txt: string,
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        humidity: number;}
    pop: number;
    sys: {pod: string}
    visibility: string;
    weather: Weather[];
    wind: {speed: number,
        deg: number,
        gust: number};
}

interface Weather { id: number; main: string; description: string; icon: string };

export default DateTime;