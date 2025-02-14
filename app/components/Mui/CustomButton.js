import { Button, CircularProgress } from '@mui/material';


export default  function CustomeButton({label, startIcon, size,type, onClick, variant, isLoading, color, hideText,arialabel, disabled,downloadLink}){
    return(
        <>
         {downloadLink ? (
                <a href={downloadLink} download className="w-full">
                <Button disabled={disabled} aria-label={arialabel} type={type} startIcon={startIcon} color={color} fullWidth size={size || 'large'} variant={variant || 'containedPrimary'} style={{ textTransform: 'capitalize' }} >
                {isLoading && (
                    <CircularProgress size={20} color="#ffffff" style={{ marginRight: '12px' }} />
                )}
                {!hideText && (label || 'Button')}
                </Button>
                </a>
         ):(
                <>
                <Button disabled={disabled} aria-label={arialabel} type={type} startIcon={startIcon} color={color} fullWidth size={size ||'large'} variant={variant||"containedPrimary"} onClick={onClick} style={{textTransform:"capitalize"}}>
                        {isLoading&&( <CircularProgress size={20} color="#ffffff" style={{ marginRight: '12px' }} /> )}
                                {!hideText && (label || "Button")}
                </Button>
                </>
         )}
           
        </>
    )

}