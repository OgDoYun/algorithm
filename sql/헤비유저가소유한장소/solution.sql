select *
from PLACES P
where P.HOST_ID in (
    select SUB.HOST_ID
    from PLACES SUB
    group by SUB.HOST_ID
    having count(*) > 1
);