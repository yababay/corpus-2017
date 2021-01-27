:- module(silver_age, [викиссылки/2]).
:- use_module(wiki:'./wiki.pl').
:- use_module(persons:'./persons.pl').

полное_имя(P, F):-
    persons:полное_имя(P, F).

персоны(L):-
    persons:персоны(L).

викиссылки(P, L):-
    wiki:викиссылки(P, L).

викиссылки(P, L):-
    wiki:викиссылки(P, L).
