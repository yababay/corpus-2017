FROM swipl
WORKDIR /srv
CMD ["mkdir", "persons-1917"]
COPY persons-1917 persons-1917
COPY load.pl .
EXPOSE 8030
CMD ["swipl", "./load.pl"]

