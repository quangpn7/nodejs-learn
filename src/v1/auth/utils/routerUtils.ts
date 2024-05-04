import { AccountModel, UserAuthType } from "../../../schema/Account/account";

const isExistedUser = async (data: UserAuthType): Promise<boolean> => {
  const { username } = data;
  const founded = await AccountModel.findOne({
    username,
  });

  return !!founded;
};

export { isExistedUser };
