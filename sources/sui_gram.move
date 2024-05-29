/// Module: sui_gram
module sui_gram::sui_gram {
use sui::object::{Self, UID};
use std::string;
use sui::tx_context::{Self, TxContext};
use sui::transfer;
use sui::address;
use sui::coin::Coin;
use sui::sui::SUI;

public struct Meme has key, store {
    id: UID,
    link: string::String,
    owner: address,
    vote_count: u64,
  }
public struct MemeCollection has key, store{
  id: UID,
  meme: Meme,

}
    fun new(link: string::String, owner: address, vote_count: u64, ctx: &mut TxContext): Meme {
  Meme {
    id: object::new(ctx),
    link: link,
    vote_count: vote_count,
    owner: owner
  }
}
public entry fun create_new_meme(link: string::String,owner: address, ctx: &mut TxContext) {
  let vote_count: u64 = 0;
  let new_meme = new(link, owner, vote_count , ctx);
  let meme_collection: &mut MemeCollection;
  // meme_collection.add_meme(new_meme);
}
public entry fun vote_meme(meme: &mut Meme, voter: address) {
   let new_vote_count = meme.vote_count + 1;
  meme.vote_count = new_vote_count;
}
public entry fun sui_reward(){
  
}
}
