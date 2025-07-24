const data = [
  {
    title: "Total Uploads",
    number: 47,
  },
  {
    title: "Data  Processed",
    number: 120,
  },
  {
    title: "Analysis Time",
    number: 30.5,
  },
  {
    title: "Success Rate",
    number: 98.53,
  },
]


const UploadStatistics = () => {
    return ( 
        <div>
            <h1>Upload Statistics </h1>
            { 
                data.map((item, index) => {
                    return (
                        <div key={index} className="statistic-item">
                            <h2>{item.title}</h2>
                            <p>{item.number}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default UploadStatistics