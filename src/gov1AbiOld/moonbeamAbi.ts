import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './moonbeamAbi.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const functions = {
    delegate: new Func<[representative: string, conviction: ethers.BigNumber, amount: ethers.BigNumber], {representative: string, conviction: ethers.BigNumber, amount: ethers.BigNumber}, []>(
        abi, '0x0185921e'
    ),
    deposit_of: new Func<[prop_index: ethers.BigNumber], {prop_index: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0xa30305e9'
    ),
    finished_referendum_info: new Func<[ref_index: ethers.BigNumber], {ref_index: ethers.BigNumber}, [_: boolean, _: ethers.BigNumber]>(
        abi, '0xb1fd383f'
    ),
    lowest_unbaked: new Func<[], {}, ethers.BigNumber>(
        abi, '0x0388f282'
    ),
    note_imminent_preimage: new Func<[encoded_proposal: string], {encoded_proposal: string}, []>(
        abi, '0xcf205f96'
    ),
    note_preimage: new Func<[encoded_proposal: string], {encoded_proposal: string}, []>(
        abi, '0x200881f5'
    ),
    ongoing_referendum_info: new Func<[ref_index: ethers.BigNumber], {ref_index: ethers.BigNumber}, [_: ethers.BigNumber, _: string, _: ethers.BigNumber, _: ethers.BigNumber, _: ethers.BigNumber, _: ethers.BigNumber, _: ethers.BigNumber]>(
        abi, '0x8b93d11a'
    ),
    propose: new Func<[proposal_hash: string, value: ethers.BigNumber], {proposal_hash: string, value: ethers.BigNumber}, []>(
        abi, '0x7824e7d1'
    ),
    public_prop_count: new Func<[], {}, ethers.BigNumber>(
        abi, '0x56fdf547'
    ),
    remove_vote: new Func<[ref_index: ethers.BigNumber], {ref_index: ethers.BigNumber}, []>(
        abi, '0x2042f50b'
    ),
    second: new Func<[prop_index: ethers.BigNumber, seconds_upper_bound: ethers.BigNumber], {prop_index: ethers.BigNumber, seconds_upper_bound: ethers.BigNumber}, []>(
        abi, '0xc7a76601'
    ),
    standard_vote: new Func<[ref_index: ethers.BigNumber, aye: boolean, vote_amount: ethers.BigNumber, conviction: ethers.BigNumber], {ref_index: ethers.BigNumber, aye: boolean, vote_amount: ethers.BigNumber, conviction: ethers.BigNumber}, []>(
        abi, '0x3f3c21cc'
    ),
    un_delegate: new Func<[], {}, []>(
        abi, '0xcb37b8ea'
    ),
    unlock: new Func<[target: string], {target: string}, []>(
        abi, '0x2f6c493c'
    ),
}

export class Contract extends ContractBase {

    deposit_of(prop_index: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.deposit_of, [prop_index])
    }

    finished_referendum_info(ref_index: ethers.BigNumber): Promise<[_: boolean, _: ethers.BigNumber]> {
        return this.eth_call(functions.finished_referendum_info, [ref_index])
    }

    lowest_unbaked(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.lowest_unbaked, [])
    }

    ongoing_referendum_info(ref_index: ethers.BigNumber): Promise<[_: ethers.BigNumber, _: string, _: ethers.BigNumber, _: ethers.BigNumber, _: ethers.BigNumber, _: ethers.BigNumber, _: ethers.BigNumber]> {
        return this.eth_call(functions.ongoing_referendum_info, [ref_index])
    }

    public_prop_count(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.public_prop_count, [])
    }
}
