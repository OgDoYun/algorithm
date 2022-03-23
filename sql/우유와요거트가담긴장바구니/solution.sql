select CP.CART_ID
from CART_PRODUCTS CP
where CP.NAME = 'Milk' or
CP.NAME = 'Yogurt'
group by CP.CART_ID
having count(distinct CP.NAME) > 1
order by CP.CART_ID asc;