def check_balance(address, number, web3):
    try:
        balance = web3.eth.get_balance(web3.toChecksumAddress(address))
        humanReadable = web3.fromWei(balance,'ether')
        cprint(f'{number}. {address} : {humanReadable}', 'white')
