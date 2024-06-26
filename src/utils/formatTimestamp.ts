import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';



export const formatTimestamp = (timestamp: number) =>{
    const date = new Date(timestamp);
    return format(date, "EEE, dd MMM", { locale: ptBR });
}