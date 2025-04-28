#bridge-file-version: #4
##RED
execute @p[rx=-35,rxm=-90] ~ ~ ~ execute @e[r=2,type=planeronnel:huey_black] ~ ~ ~ effect @s levitation 1 9 true
execute @p[rx=5,rxm=-10] ~ ~ ~ execute @e[r=2,type=planeronnel:huey_black] ~ ~ ~ effect @s levitation 1 2 true
execute @p[rx=-10,rxm=-35] ~ ~ ~ execute @e[r=2,type=planeronnel:huey_black] ~ ~ ~ effect @s levitation 1 5 true
execute @p[rx=90,rxm=5] ~ ~ ~ execute @e[r=2,type=planeronnel:huey_black] ~ ~ ~ effect @s slow_falling 999 0 true
##BLACK
execute @p[rx=-35,rxm=-90] ~ ~ ~ execute @e[r=2,type=planeronnel:huey_white] ~ ~ ~ effect @s levitation 1 9 true
execute @p[rx=5,rxm=-10] ~ ~ ~ execute @e[r=2,type=planeronnel:huey_white] ~ ~ ~ effect @s levitation 1 2 true
execute @p[rx=-10,rxm=-35] ~ ~ ~ execute @e[r=2,type=planeronnel:huey_white] ~ ~ ~ effect @s levitation 1 5 true
execute @p[rx=90,rxm=5] ~ ~ ~ execute @e[r=2,type=planeronnel:huey_white] ~ ~ ~ effect @s slow_falling 999 0 true 