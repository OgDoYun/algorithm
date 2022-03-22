select OUTS.ANIMAL_ID, OUTS.ANIMAL_TYPE, OUTS.NAME
from ANIMAL_INS INS, ANIMAL_OUTS OUTS
where INS.ANIMAL_ID = OUTS.ANIMAL_ID and
(INS.SEX_UPON_INTAKE like 'Intact%' or
INS.SEX_UPON_INTAKE like 'Intact%') and
(OUTS.SEX_UPON_OUTCOME like 'Spayed%' or 
OUTS.SEX_UPON_OUTCOME like 'Neutered%')
order by OUTS.ANIMAL_ID;