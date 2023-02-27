const ProgressBar = ({ progress }) => {
  const borderRadiusPx = 10

  return (
    <div
      style={{
        width: '40%',
        height: '15px',
        backgroundColor: '#ddd',
        margin: '0 auto',
        borderRadius: borderRadiusPx
      }}
    >
      <div
        style={{
          width: `${progress * 100}%`,
          height: '100%',
          backgroundColor: '#887aff',
          borderRadius: `${borderRadiusPx}px 0px 0px ${borderRadiusPx}px`
        }}
      ></div>
    </div>
  )
}

export default ProgressBar
