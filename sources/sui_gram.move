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
    owner_name: string::String,
    vote_count: u64,
  }
    fun new(link: string::String, owner_name: string::String, vote_count: u64, ctx: &mut TxContext): Meme {
  Meme {
    id: object::new(ctx),
    link: link,
    vote_count: vote_count,
    owner_name: owner_name
  }
}
public entry fun create_new_meme(link: string::String, owner_name: string::String, ctx: &mut TxContext) {
  let vote_count: u64 = 0;
  let new_meme = new(link, owner_name, vote_count , ctx);
  transfer::transfer(new_meme, tx_context::sender(ctx));
}
public entry fun vote_meme(meme: &mut Meme, voter: address) {
   let new_vote_count = meme.vote_count + 1;
  meme.vote_count = new_vote_count;
}

public fun get_top_meme(memes: &Meme): UID {
  let mut highest_vote_count = 0;
  let mut top_meme_id: UID = Null;

  for meme in memes.iter() {
    if meme.vote_count > highest_vote_count {
      highest_vote_count = meme.vote_count;
      top_meme_id = Some(meme.id);
    }
  }

  top_meme_id
}
}
