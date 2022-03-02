select hour(DATETIME) as HOUR, count(*) as COUNT 
from ANIMAL_OUTS
where DATETIME between '09:00' and '19:59'
group by hour(DATETIME)
order by HOUR asc;